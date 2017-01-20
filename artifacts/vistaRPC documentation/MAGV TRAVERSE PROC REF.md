---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV TRAVERSE PROC REF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV TRAVERSE PROC REF{:/}
 tag | {::nomarkdown}TRAVPROC{:/}
 routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows the user to traverse the entries on the IMAGING PROCEDURE REFERENCE File (#2005.61) that are indexed under an entry on the IMAGING PATIENT REFERENCE File (#2005.6).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the entry on the IMAGING PATIENT REFERENCE File (#2005.6) whose child entries on the IMAGING PROCEDURE REFERENCE File (#2005.61) are to be traversed.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the direction of traversal:  FIRST, NEXT, PREV, or LAST.{:/} | 
| {::nomarkdown}CHILDIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} |  | {::nomarkdown}This is the internal entry number of the entry on the IMAGING PROCEDUREREFERENCE File (#2005.61) from which to proceed.  It should be specifiedonly for the NEXT and PREV traversal commands.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}