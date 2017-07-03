---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; QACV PERSON LOOKUP VLH
# QACV PERSON LOOKUP VLH

Pass the name of an employee formatted as "last_name,first_name".  The routine does a lister call on the VistA NEW PERSON file (200) to findthe next set of records that match the name. Partial name lookup issupported. For example, "Sm" will find all "Smiths" and Smurfs, "Sm,J"will find "Smith,Joe", and "Smurf,Jimmy". The routine returns the IEN, name components, title and mail code for theperson(s) who match the lookup value, in XML format. In addition, the XMLdata contains a flag indicating whether there are more matching records toreturn. If it is set to 1, then the caller can make another call to getthe next 'N' records. The XML data also contains a 'next name' and 'nextIEN' value. This is used to tell the FileMan Lister where to start lookingon subsequent calls, in order to return the next N records. These two'from' values must be passed as input parameters to subsequent calls.

Property | Value
--- | ---
Label | EN
Routine | [QACVEMPX](http://code.osehra.org/dox/Routine_QACVEMPX_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
EMPNAME | LITERAL | 60 | true | Employee&#x27;s name with last name first. Ex: Smith,Joe
PATSROWS | LITERAL | 12 | true | Number of employees to return in each call. If not passed, the defaultvalue will be the next 10 matching employees.
PATSFRM0 | LITERAL | 35 | true | On the first call to this RPC, this parameter should be set to the emptystring &quot;&quot;. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the &quot;patsFrom0&quot; attribute value fromthe XML document output by the previous call. The attribute will contain the starting NAME value for the next search.
PATSFRM1 | LITERAL | 35 | true | On the first call to this RPC, this parameter should be set to the emptystring &quot;&quot;. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the &quot;patsFrom1&quot; attribute value fromthe XML document output by the previous call. The attribute will contain the starting IEN value for the next search.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}