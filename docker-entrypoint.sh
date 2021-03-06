#!/usr/bin/env bash
git pull origin master
/usr/bin/pip3 install -r ../requirements.txt
export PYTHONPATH=$PYTHONPATH:/srv/wsgi:/srv/wsgi/isektionen_django
/usr/bin/python3 isektionen_django/manage.py migrate --noinput       # Apply database migrations
/usr/bin/python3 isektionen_django/manage.py collectstatic --noinput  # collect static files
# Prepare log files and start outputting logs to stdout
touch /srv/logs/gunicorn.log
touch /srv/logs/access.log
# tail -n 0 -f /srv/logs/*.log &
echo Starting nginx
# Start Gunicorn processes
echo Starting Gunicorn.
exec gunicorn isektionen_django.isektionen.wsgi:application \
    --name base_app \
    --bind unix:isektionen_django.sock \
    --workers 3 \
    --log-level=info \
    --log-file=/srv/logs/gunicorn.log \
    --access-logfile=/srv/logs/access.log &
exec service nginx start