# Copyright (c) Microsoft Corporation
# Licensed under the MIT License.

import setuptools

# Fetch ReadMe
with open("README.md", "r") as fh:
    long_description = fh.read()

# Use requirements.txt to set the install_requires
with open('requirements.txt') as f:
    install_requires = [line.strip() for line in f]

setuptools.setup(
    name="raiwidgets",
    version="0.1.0-dev",
    author="Roman Lutz, Ilya Matiach, Ke Xu, Brandon Horn",
    author_email="fairlearn@microsoft.com",
    description="Interactive visualizations to assess fairness, explain "
                "models, and analyze errors in Machine Learning",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/microsoft/responsible-ai-core",
    packages=setuptools.find_packages(),
    python_requires='>=3.6',
    install_requires=install_requires,
    classifiers=[
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Development Status :: 3 - Alpha"
    ],
    include_package_data=True,
    package_data={
        '': [
            'templates/inlineDashboard.html',
            'static/index.js',
            'static/index.js.map'
        ]
    },
    zip_safe=False,
)