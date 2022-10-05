# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Account(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(unique=True, max_length=32)
    password = models.CharField(max_length=32)
    created_on = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'account'

    def __str__(self):
        return self.username


class Car(models.Model):
    car_id = models.AutoField(primary_key=True)
    car_functionality = models.TextField()
    linker = models.ForeignKey('Linker', models.DO_NOTHING, blank=True, null=True)
    tmpart = models.ForeignKey('Tmpart', models.DO_NOTHING, blank=True, null=True)
    receptor = models.ForeignKey('Receptor', models.DO_NOTHING, blank=True, null=True)
    izpart = models.ForeignKey('Izpart', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(Account, models.DO_NOTHING)
    created_on = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'car'

    def __str__(self):
        return str(self.car_id) + " | " + self.name


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class Izdomain(models.Model):
    izdomain_id = models.AutoField(primary_key=True)
    izdomain_functionality = models.TextField(blank=True, null=True)
    izpart = models.ForeignKey('Izpart', models.DO_NOTHING, blank=True, null=True)
    seq = models.ForeignKey('Sequence', models.DO_NOTHING, blank=True, null=True)
    paper = models.ForeignKey('Paper', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'izdomain'

    def __str__(self):
        return str(self.izdomain_id)


class Izpart(models.Model):
    izpart_id = models.AutoField(primary_key=True)
    izpart_functionality = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'izpart'
    
    def __str__(self):
        return str(self.izpart_id)


class Linker(models.Model):
    linker_id = models.AutoField(primary_key=True)
    seq = models.ForeignKey('Sequence', models.DO_NOTHING, blank=True, null=True)
    paper = models.ForeignKey('Paper', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'linker'

    def __str__(self):
        return str(self.linker_id)


class Paper(models.Model):
    paper_id = models.AutoField(primary_key=True)
    doi = models.CharField(max_length=64)
    title = models.TextField()
    journal = models.CharField(max_length=64, blank=True, null=True)
    authors = models.TextField(blank=True, null=True)
    published_date = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'paper'

    def __str__(self):
        return self.title


class Receptor(models.Model):
    receptor_id = models.AutoField(primary_key=True)
    receptor_functionality = models.TextField(blank=True, null=True)
    receptor_needslinker = models.BooleanField(blank=True, null=True)
    seq = models.ForeignKey('Sequence', models.DO_NOTHING, blank=True, null=True)
    paper = models.ForeignKey(Paper, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'receptor'

    def __str__(self):
        return str(self.receptor_id)


class Reviewed(models.Model):
    reviewed_id = models.AutoField(primary_key=True)
    car = models.ForeignKey(Car, models.DO_NOTHING, blank=True, null=True)
    paper = models.ForeignKey(Paper, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'reviewed'


class Sequence(models.Model):
    seq_id = models.AutoField(primary_key=True)
    seq_length = models.IntegerField()
    seq_sequence = models.TextField()
    seq_annotation = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sequence'

    def __str__(self):
        return str(self.seq_id)


class Tmpart(models.Model):
    tmpart_id = models.AutoField(primary_key=True)
    seq = models.ForeignKey(Sequence, models.DO_NOTHING, blank=True, null=True)
    paper = models.ForeignKey(Paper, models.DO_NOTHING, blank=True, null=True)
    function = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tmpart'
    
    def __str__(self):
        return str(self.tmpart_id)

class DebugTable(models.Model):
    id = models.AutoField(primary_key=True)
    debug_1 = models.TextField(blank=True, null=True)  # This field type is a guess.
    debug_2 = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'debug_table'

    def __str__(self):
        return self.debug_1 + " " + str(self.debug_2)

