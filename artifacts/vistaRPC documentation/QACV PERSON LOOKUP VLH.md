---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; QACV PERSON LOOKUP VLH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}QACV PERSON LOOKUP VLH{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [QACVEMPX](http://code.osehra.org/dox/Routine_QACVEMPX_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Pass the name of an employee formatted as \last_name,first_name\.  The routine does a lister call on the VistA NEW PERSON file (200) to findthe next set of records that match the name. Partial name lookup issupported. For example, \Sm\ will find all \Smiths\ and Smurfs, \Sm,J\will find \Smith,Joe\, and \Smurf,Jimmy\. The routine returns the IEN, name components, title and mail code for theperson(s) who match the lookup value, in XML format. In addition, the XMLdata contains a flag indicating whether there are more matching records toreturn. If it is set to 1, then the caller can make another call to getthe next 'N' records. The XML data also contains a 'next name' and 'nextIEN' value. This is used to tell the FileMan Lister where to start lookingon subsequent calls, in order to return the next N records. These two'from' values must be passed as input parameters to subsequent calls.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}EMPNAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Employee's name with last name first. Ex: Smith,Joe{:/} | 
| {::nomarkdown}PATSROWS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Number of employees to return in each call. If not passed, the defaultvalue will be the next 10 matching employees.{:/} | 
| {::nomarkdown}PATSFRM0{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}On the first call to this RPC, this parameter should be set to the emptystring \\. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the \patsFrom0\ attribute value fromthe XML document output by the previous call. The attribute will contain the starting NAME value for the next search.{:/} | 
| {::nomarkdown}PATSFRM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}On the first call to this RPC, this parameter should be set to the emptystring \\. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the \patsFrom1\ attribute value fromthe XML document output by the previous call. The attribute will contain the starting IEN value for the next search.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}