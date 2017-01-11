---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; QACI NATL INSTITUTION LIST 

 property | value 
--- | --- 
 label | QACI NATL INSTITUTION LIST
 tag | ENLDSTA
 routine | [QACI2](http://code.osehra.org/dox/Routine_QACI2_source.html)
 return value type | SINGLE VALUE
 description | This RPC receives a list of station numbers from the Standard Data Services institution table std_institution. The list contains all station numbers that begin with the 3 character computing facility station number. The list is stored in the ^XTMP array, and is used in the pre-migrationdata cleanup option to make sure that any data references only validstation numbers.




 ###### Generated on January 11th 2017, 6:39:43 am