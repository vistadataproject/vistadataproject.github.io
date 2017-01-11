---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; QACV PERSON LOOKUP VLH 

 property | value 
--- | --- 
 label | QACV PERSON LOOKUP VLH
 tag | EN
 routine | [QACVEMPX](http://code.osehra.org/dox/Routine_QACVEMPX_source.html)
 return value type | GLOBAL ARRAY
 description | Pass the name of an employee formatted as \last_name,first_name\.  The routine does a lister call on the VistA NEW PERSON file (200) to findthe next set of records that match the name. Partial name lookup issupported. For example, \Sm\ will find all \Smiths\ and Smurfs, \Sm,J\will find \Smith,Joe\, and \Smurf,Jimmy\. The routine returns the IEN, name components, title and mail code for theperson(s) who match the lookup value, in XML format. In addition, the XMLdata contains a flag indicating whether there are more matching records toreturn. If it is set to 1, then the caller can make another call to getthe next 'N' records. The XML data also contains a 'next name' and 'nextIEN' value. This is used to tell the FileMan Lister where to start lookingon subsequent calls, in order to return the next N records. These two'from' values must be passed as input parameters to subsequent calls.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| EMPNAME | LITERAL | 60 | true | Employee's name with last name first. Ex: Smith,Joe | 
| PATSROWS | LITERAL | 12 | true | Number of employees to return in each call. If not passed, the defaultvalue will be the next 10 matching employees. | 
| PATSFRM0 | LITERAL | 35 | true | On the first call to this RPC, this parameter should be set to the emptystring \\. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the \patsFrom0\ attribute value fromthe XML document output by the previous call. The attribute will contain the starting NAME value for the next search. | 
| PATSFRM1 | LITERAL | 35 | true | On the first call to this RPC, this parameter should be set to the emptystring \\. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the \patsFrom1\ attribute value fromthe XML document output by the previous call. The attribute will contain the starting IEN value for the next search. | 




 ###### Generated on January 11th 2017, 6:39:43 am