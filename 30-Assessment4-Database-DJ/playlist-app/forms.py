"""Forms for playlist app."""

from wtforms import SelectField, StringField, IntegerField
from flask_wtf import FlaskForm
from wtforms.validators import InputRequired

class PlaylistForm(FlaskForm):
    """Form for adding playlists."""
    name = StringField("Name of the playlist", validators=[InputRequired()])
    description = StringField("Desciption")


class SongForm(FlaskForm):
    """Form for adding songs."""
    title = StringField("Song title", validators=[InputRequired()])
    artist = StringField("Artist name", validators=[InputRequired()])


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
