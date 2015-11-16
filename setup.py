#!/usr/bin/env python
from setuptools import setup

setup(name='isektionen.se',
      version='0.1',
      description='Landingssida för Industriell Ekonomi i Linköping',
      author='Webgroup',
      author_email='webmaster@isektionen.se',
      url='http://www.isektionen.se',
      install_requires=['Django>=1.8,<1.8.99', 'PyMySQL', 'dj-static', 'django-reversion', 'markdown'],  #This should match requirements.txt!
      )
