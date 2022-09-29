class OscarDatabaseRouter:
    # route_app_labels = {'auth', 'contenttypes', 'sessions', 'admin'}

    # def db_for_read(self, model, **hints):
    #     if model._meta.app_label in self.route_app_labels:
    #         return 'oscar_backend'
    #     return None

    # def db_for_write(self, model, **hints):
    #     if model._meta.app_label in self.route_app_labels:
    #         return 'oscar_backend'
    #     return None

    # def allow_relation(self, obj1, obj2, **hints):
    #     if (
    #         obj1._meta.app_label in self.route_app_labels or
    #         obj2._meta.app_label in self.route_app_labels
    #     ):
    #        return True
    #     return None

    # def allow_migrate(self, db, app_label, model_name=None, **hints):
    #     if app_label in self.route_app_labels:
    #         return db == 'oscar_backend'
    #     return None

    def db_for_read(self, model, **hints):
        """
        Attempts to read auth models go to auth_db.
        """
        if model._meta.app_label == 'oscar_db':
            return 'oscar_database'
        return 'oscar_backend'

    def db_for_write(self, model, **hints):
        """
        Attempts to write auth models go to auth_db.
        """
        if model._meta.app_label == 'oscar_db':
            return 'oscar_database'
        return 'oscar_backend'

    def allow_relation(self, obj1, obj2, **hints):
        """
        Do not allow relations involving the oscar database
        """
        if obj1._meta.app_label == 'oscar_db' or obj2._meta.app_label == 'oscar_db':
           return False
        return True

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Do not allow migrations on the oscar database
        """
        if db == 'oscar_db':
            return False
        return True