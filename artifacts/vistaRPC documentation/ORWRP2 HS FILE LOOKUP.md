---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP2 HS FILE LOOKUP 

 property | value 
--- | --- 
 label | ORWRP2 HS FILE LOOKUP
 tag | FILESEL
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC gets the list of file entries for the file defined for a specificHealth Summary component on the ADHOC Health Summary.  Current choicesinclude files 60, 9999999.64, 811.9, 8925.1, 81, and possibly others(handled generically).  The file entries are used to populate a combo boxon the form.


### Method description

 property | value 
--- | --- 
 Method comment | Get file entries for Combobox
 Leading comment lines | RPC => ORWRP2 HS FILE LOOKUP

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL |  | true | This is the file number for the entries to be used to populate the combobox. | 




 ###### Generated on January 11th 2017, 6:39:42 am