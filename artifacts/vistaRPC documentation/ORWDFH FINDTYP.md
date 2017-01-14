---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH FINDTYP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH FINDTYP{:/}
 tag | {::nomarkdown}FINDTYP{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return type of dietetics order based on display group.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return type of dietetics order based on display group
 Input Parameters | {::nomarkdown}DGRP{:/}
 Lines | {::nomarkdown} S VAL=$P($G(^ORD(100.98,DGRP,0)),U,3)<br/> S:VAL="D AO" VAL="A" S VAL=$E(VAL){:/}




 Generated on January 13th 2017, 7:15:27 am