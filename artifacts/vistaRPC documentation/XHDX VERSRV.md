---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XHDX VERSRV 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XHDX VERSRV{:/}
 tag | {::nomarkdown}VERSRV{:/}
 routine | [XHDX](http://code.osehra.org/dox/Routine_XHDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of options and the associated version numbers.  The list ofoptions is passed in.  Returns is a list of OptionName^VersionNumber.  Theversion number must be the last space piece in the MENU TEXT of the option.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A list of option names.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}