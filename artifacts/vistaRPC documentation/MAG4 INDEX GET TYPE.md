---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 INDEX GET TYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 INDEX GET TYPE{:/}
 tag | {::nomarkdown}IGT{:/}
 routine | [MAGSIXGT](http://code.osehra.org/dox/Routine_MAGSIXGT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call is used to filter out thoseimage types that belong to a given image category (Class). When images are displayed, it is desirable to limit thelist of presented images to only those that are likelyto be relevant in the current context. This procedure accepts an \image class\ (either an IENor the name of a class) and returns all \image types\that belong to that class..{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}160{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is a ',' (comma) delimited string of classes.only those index types, that match a 'class' in the string willbe returned in the result array.{:/} | 
| {::nomarkdown}FLGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown};  FLGS : An '^' delimited string;     1 IGN: Flag to IGNore the Status field;     2 INCL: Include Class in the Output string;     3 INST: Include Status in the Output String{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}