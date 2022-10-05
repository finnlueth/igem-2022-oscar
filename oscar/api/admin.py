from django.contrib import admin
import pathlib

from .models import Account, Car, Izdomain, Izpart, Linker, Paper, Receptor, Reviewed, Sequence, Tmpart, DebugTable

admin.site.register(Account)
admin.site.register(Car)
admin.site.register(Izdomain)
admin.site.register(Izpart)
admin.site.register(Linker)
admin.site.register(Paper)
admin.site.register(Receptor)
admin.site.register(Reviewed)
admin.site.register(Sequence)
admin.site.register(Tmpart)
admin.site.register(DebugTable)