---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XHDX VERSRV 

 property | value 
--- | --- 
 label | XHDX VERSRV
 tag | VERSRV
 routine | [XHDX](http://code.osehra.org/dox/Routine_XHDX_source.html)
 return value type | ARRAY
 description | Returns a list of options and the associated version numbers.  The list ofoptions is passed in.  Returns is a list of OptionName^VersionNumber.  Theversion number must be the last space piece in the MENU TEXT of the option.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPT | LIST | 3 | true | A list of option names. | 