---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; QACI NATL INSTITUTION LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}QACI NATL INSTITUTION LIST{:/}
 tag | {::nomarkdown}ENLDSTA{:/}
 routine | [QACI2](http://code.osehra.org/dox/Routine_QACI2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC receives a list of station numbers from the Standard Data Services institution table std_institution. The list contains all station numbers that begin with the 3 character computing facility station number. The list is stored in the ^XTMP array, and is used in the pre-migrationdata cleanup option to make sure that any data references only validstation numbers.{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}