---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; QACV KEY HOLDERS VLH<br/>
# QACV KEY HOLDERS VLH

Pass a list of SECURITY KEY names. The routine returns the next 'n' persons who have been granted access to one or more of the keys in the list. The routine returns the IEN, name components, title and mail code for theperson(s) who match the lookup value, in XML format. In addition, the XMLheader contains a flag indicating whether there are more matching recordsto return. If it is set to 1, then the caller can make another call to getthe next 'N' records. The XML header also contains a 'next name' and 'nextIEN' value. These values are used like the FROM array in a FileMan Lister call LIST^DIC. They are used to tell the routine where to start looking onsubsequent calls, in order to return the next N records. These two 'from'values must be passed as input parameters to subsequent calls.

## Properties

Property | Value
--- | ---
Label | EN
Routine | [QACVEMPX](http://code.osehra.org/dox/Routine_QACVEMPX_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
KEYLIST | LIST | 30 | true | An array containing names of one or more SECURITY KEYS in the VistA system. The array looks like LIST(N)&#x3D;KEYNAME where N is a integer.
PATSROWS | LITERAL | 12 | true | Number of employees to return in each call. If not passed, the defaultvalue will be the next 10 matching employees.
PATSFRM0 | LITERAL | 35 | true | On the first call to this RPC, this parameter should be set to the emptystring &quot;&quot;. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the &quot;patsFrom0&quot; attribute value fromthe XML document output by the previous call. The attribute will contain the starting NAME value for the next search.
PATSFRM1 | LITERAL | 35 | true | On the first call to this RPC, this parameter should be set to the emptystring &quot;&quot;. On subsequent calls to find more matches to the same lookup value, the parameter must be set to the &quot;patsFrom1&quot; attribute value fromthe XML document output by the previous call. The attribute will contain the starting IEN value for the next search.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}