# Copyright (c) Microsoft Corporation
# Licensed under the MIT License.

from flask_cors import CORS
import os
import re
from IPython.display import display, HTML
from rai_core_flask.environment_detector import AZURE_NB
from rai_core_flask.environments.base_environment import BaseEnvironment


class AzureNBEnvironment(BaseEnvironment):
    """Environment class for Azure notebook environments.

    AzureNBEnvironment represents functionality to detect whether it is
    executed in a Azure notebook environment based on the `.nbvm` file.
    Additionally, it can display corresponding visualizations.
    """

    nbvm_file_path = "/mnt/azmnt/.nbvm"

    def __init__(self, service):
        self.base_url = None
        self.successfully_detected = False

        if not (os.path.exists(AzureNBEnvironment.nbvm_file_path) and
                os.path.isfile(AzureNBEnvironment.nbvm_file_path)):
            self.successfully_detected = False
        else:
            # Use regex to find items of the form key=value where value is a
            # part of a URL.
            # The keys of interest are "instance" and domainsuffix"
            envre = re.compile(r'''^([^\s=]+)=(?:[\s"']*)(.+?)(?:[\s"']*)$''')
            result = {}
            with open(AzureNBEnvironment.nbvm_file_path) as nbvm_variables:
                for line in nbvm_variables:
                    match = envre.match(line)
                    if match is not None:
                        result[match.group(1)] = match.group(2)

            if "instance" not in result or "domainsuffix" not in result:
                self.successfully_detected = False
            else:
                instance_name = result["instance"]
                domain_suffix = result["domainsuffix"]
                self.base_url = f"https://{instance_name}-{service.port}.{domain_suffix}"
                self.successfully_detected = True
                self.nbvm_origins = [
                    f"https://{instance_name}.{domain_suffix}",
                    f"https://{instance_name}-{service.port}.{domain_suffix}"
                ]

    def select(self, service):
        headers = ['Content-Type']
        service.cors = CORS(
            service.app,
            origins=self.nbvm_origins,
            expose_headers=headers,
            supports_credentials=True)
        service.with_credentials = True
        service.env_name = AZURE_NB


    # This will probably be the default, if an env support IPython display,
    # Call it for inlined html.
    def display(self, html):
        """Display the passed HTML using IPython."""
        display(HTML(html))
