---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DDVG XLATE DATA2IDX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DDVG XLATE DATA2IDX{:/}
 tag | {::nomarkdown}XLATE2{:/}
 routine | [DSICDDR4](http://code.osehra.org/dox/Routine_DSICDDR4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Will take an external value and perform a FILEMAN lookup.  Restrictions are:1.  The external value must be resolvable to a unique entry.2.  There must be an index on the field that contains the value.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the file (or subfile) number upon which the lookup will be done{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the standard IENS parameter when FIND1^DIC is invoked.  It is only needed if the lookup is on a multiple instead of the parent file.{:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the value in external format used for the lookup.lookup.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}