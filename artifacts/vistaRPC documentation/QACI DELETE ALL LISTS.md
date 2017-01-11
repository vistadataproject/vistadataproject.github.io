---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; QACI DELETE ALL LISTS 

 property | value 
--- | --- 
 label | QACI DELETE ALL LISTS
 tag | ENDELALL
 routine | [QACI2C](http://code.osehra.org/dox/Routine_QACI2C_source.html)
 return value type | SINGLE VALUE
 description | This RPC deletes the lists of legacy table data and Contact (ROC) numbersthat have been migrated from the old Patient Representative files to thenew PATS Oracle Tables. It is called from a Java routine after themigrated data has been deleted from the Oracle tables. This is done ONLYif for some reason a site has decided that they need to completely restartthe data migration to PATS.




 ###### Generated on January 11th 2017, 6:39:43 am