---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; QACI DELETE ALL LISTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}QACI DELETE ALL LISTS{:/}
 tag | {::nomarkdown}ENDELALL{:/}
 routine | [QACI2C](http://code.osehra.org/dox/Routine_QACI2C_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC deletes the lists of legacy table data and Contact (ROC) numbersthat have been migrated from the old Patient Representative files to thenew PATS Oracle Tables. It is called from a Java routine after themigrated data has been deleted from the Oracle tables. This is done ONLYif for some reason a site has decided that they need to completely restartthe data migration to PATS.{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}