public class SqlitePaginationEfStorage : SqliteEfStorage, IPaginationStorage
{
    public Contact GetContactById(int id)
    {
        return base.context.Contacts.Find(id);
    }
    public SqlitePaginationEfStorage(SqliteDbContext context) : base(context)
    {

    }

    public (List<Contact>, int TotalCount) GetContacts(int pageNumber, int pageSize)
    {
        int total = context.Contacts.Count();
        List<Contact> contacts = context.Contacts
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToList();
        return (contacts, total);
    }

}

