﻿using System.Web;
using System.Web.Mvc;

namespace WebAppNumbersFrom1to50
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
