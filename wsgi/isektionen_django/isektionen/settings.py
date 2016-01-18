"""
Django settings for isektionen project.

Generated by 'django-admin startproject' using Django 1.8.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
import socket
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Used to determined if being run on Openshift, Jenkins or local. Determines DB-connection settings.
ON_PASS = 'OPENSHIFT_REPO_DIR' in os.environ
ON_JENKINS = 'JENKINS_SERVER_IPORTALEN' in os.environ

if ON_PASS:
    ALLOWED_HOSTS = ['*']
    DEBUG = False

elif ON_JENKINS:
    ALLOWED_HOSTS = ['*']  # TODO: Should only allow localhost, and what about production?
    DEBUG = False

else:
    ALLOWED_HOSTS = ['*']
    DEBUG = True


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '^+^i^1i94%j-hikdsafl324+107xw(vf^mz4hg--#w0mw93+kc#&4vc=#=@'  # TODO: Make use of os.envion on openshift.

if ON_PASS:
    ssl = False
    try:
        s = os.environ.get('SSL_ENABLED')
        if s == "TRUE":
            ssl = True
    except:
        pass
    if ssl:
        SECURE_SSL_REDIRECT = False
        SESSION_COOKIE_SECURE = False
        CSRF_COOKIE_SECURE = False

# Application definition
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'reversion',
    'blog',
    'isektionen'
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)


ROOT_URLCONF = 'isektionen.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [(os.path.join(os.path.dirname(BASE_DIR), 'templates'))],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'isektionen.wsgi.application'

if ON_PASS:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': os.environ['OPENSHIFT_APP_NAME'],
            'USER': os.environ['OPENSHIFT_MYSQL_DB_USERNAME'],
            'PASSWORD': os.environ['OPENSHIFT_MYSQL_DB_PASSWORD'],
            'HOST': os.environ['OPENSHIFT_MYSQL_DB_HOST'],
            'PORT': os.environ['OPENSHIFT_MYSQL_DB_PORT']
        }
    }
elif ON_JENKINS:
     DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'django_isektionen',
            'USER': 'mysql_jenkins',
            'PASSWORD': '123123123HEJJE',  # Securely generated password.
            'HOST': 'localhost',
            'PORT': '3306'
        }
    }
else:
    from .helpers import get_mysql_credentials
    mysql = get_mysql_credentials()  # Local db credentials.

    DATABASES = {
        'default': {
             'ENGINE': 'django.db.backends.mysql',
             'NAME': 'django_isektionen',
             'USER': mysql["user"],
             'PASSWORD': mysql["password"],
             'HOST': mysql["host"],
             'PORT': mysql["port"],
        }
    }
# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'sv-se'  # en-us

TIME_ZONE = 'Europe/Stockholm'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# Extra locations where staticfiles can be found:
if not ON_PASS:
    STATICFILES_DIRS = (
        os.path.join(BASE_DIR, "static"),
        os.path.join(os.path.dirname(BASE_DIR), 'static')
    )

# This is where all static files are put by 'collectstatic', it is
# always done before the app is deployed on openshift.
if ON_PASS:
    STATIC_ROOT = os.path.normpath(os.path.join(BASE_DIR, "../static/"))

"""
# The url behind which static files are exposed. Not run by mod_wsgi but
# Apache, i think, on Openshift.
"""
STATIC_URL = '/static/'

#  This url is where you can log in. The login_required decorator uses this constant.
LOGIN_URL = 'login_view' #  TODO: Use a named view instead.
