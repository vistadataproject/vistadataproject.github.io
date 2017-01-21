---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV TRAVERSE IMAGE FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV TRAVERSE IMAGE FILE{:/}
 tag | {::nomarkdown}TRAVIMG{:/}
 routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows the user to traverse the entries on the IMAGE INSTANCE FILE File (#2005.65) that are indexed under an entry on the IMAGE SOP INSTANCE File (#2005.64).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the entry on the IMAGE SOP INSTANCE File (#2005.64) whose child entries on the IMAGE INSTANCE FILE File (#2005.65) are to be traversed.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the direction of traversal:  FIRST, NEXT, PREV, or LAST.{:/} | 
| {::nomarkdown}CHILDIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} |  | {::nomarkdown}This is the internal entry number of the instance on the IMAGE INSTANCEFILE File (#2005.65) from which to proceed.  It should be specified onlyfor the NEXT and PREV traversal commands.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}