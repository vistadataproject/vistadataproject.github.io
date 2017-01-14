---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; QACV KEY HOLDERS VLH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}QACV KEY HOLDERS VLH{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [QACVEMPX](http://code.osehra.org/dox/Routine_QACVEMPX_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Pass a list of SECURITY KEY names. The routine returns the next 'n' persons who have been granted access to one or more of the keys in the list. The routine returns the IEN, name components, title and mail code for theperson(s) who match the lookup value, in XML format. In addition, the XMLheader contains a flag indicating whether there are more matching recordsto return. If it is set to 1, then the caller can make another call to getthe next 'N' records. The XML header also contains a 'next name' and 'nextIEN' value. These values are used like the FROM array in a FileMan Lister call LIST^DIC. They are used to tell the routine where to start looking onsubsequent calls, in order to return the next N records. These two 'from'values must be passed as input parameters to subsequent calls.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}KEYLIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}An array containing names of one or more SECURITY KEYS in the VistA system. The array looks like LIST(N)=KEYNAME where N is a integer.{:/} | 
| {::nomarkdown}PATSROWS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Number of employees to return in each call. If not passed, the defaultvalue will be the next 10 matching employees.{:/} | 
| {::nomarkdown}PATSFRM0{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}On the first call to this RPC, this parameter should be set to the emptystring \\. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the \patsFrom0\ attribute value fromthe XML document output by the previous call. The attribute will contain the starting NAME value for the next search.{:/} | 
| {::nomarkdown}PATSFRM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}On the first call to this RPC, this parameter should be set to the emptystring \\. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the \patsFrom1\ attribute value fromthe XML document output by the previous call. The attribute will contain the starting IEN value for the next search.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}