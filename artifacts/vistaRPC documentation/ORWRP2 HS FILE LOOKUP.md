---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 HS FILE LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS FILE LOOKUP{:/}
 tag | {::nomarkdown}FILESEL{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC gets the list of file entries for the file defined for a specificHealth Summary component on the ADHOC Health Summary.  Current choicesinclude files 60, 9999999.64, 811.9, 8925.1, 81, and possibly others(handled generically).  The file entries are used to populate a combo boxon the form.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the file number for the entries to be used to populate the combobox.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | FILESEL^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get file entries for Combobox
 First comment | {::nomarkdown}RPC => ORWRP2 HS FILE LOOKUP{:/}
 Input parameters | {::nomarkdown}ORFILE<br>ORFROM<br>ORDIR{:/}
 Code | {::nomarkdown}  D FILESEL^GMTSADH5(.OROOT,ORFILE,ORFROM,ORDIR){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}