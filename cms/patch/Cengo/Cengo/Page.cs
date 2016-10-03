using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cms13.Classes;
using Cms13.Models;

namespace Cengo
{
    public class Page : ViewPages 
    {
	    static CMS13Entities db = new CMS13Entities();
	    private int PageID = 0;

	    public Page(int PageID)
	    {
		    this.PageID = PageID;
	    }

	    public Page Parent()
	    {
		    var page = db.tblPages.FirstOrDefault(x => x.PageID == this.PageID);
		    if (page != null)
		    {
			    this.PageID = page.SubPageID;
			    return this;
		    }
		    else
		    {
			    throw new System.ArgumentException("Bu id ile bir page bulunamadi.");
		    }
	    }

	    public ViewPages GetPage()
	    {
		    var page = db.sp_getHierachy_ViewPages(this.PageID).ToList()[0];
			if (page != null)
			{
				return page;
			}
		    else
		    {
			    throw new System.ArgumentException("Bu id ile bir page bulunamadi.");
		    }
	    }

		public void CopyValues<T>(T target, T source)
		{
			Type t = typeof(T);

			var properties = t.GetProperties().Where(prop => prop.CanRead && prop.CanWrite);

			foreach (var prop in properties)
			{
				var value = prop.GetValue(source, null);
				if (value != null)
					 prop.SetValue(target, value, null);
			}
		}

    }
}
