---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGTP GET PREFERENCES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGTP GET PREFERENCES{:/}
 tag | {::nomarkdown}GETUPREF{:/}
 routine | [MAGTP011](http://code.osehra.org/dox/Routine_MAGTP011_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get the user's setting/configuration preferences in XML format from the configuration file (#2006.13){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DUZ^LABELDUZ of user whose preferences are to be retrievedLABEL of preference sectionIf DUZ is null, default to current DUZ{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}