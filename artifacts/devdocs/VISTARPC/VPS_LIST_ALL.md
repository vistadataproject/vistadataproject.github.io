---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS LIST ALL
# VPS LIST ALL

Returns a list of patients with names start with (** NOT PREFIXED BY **) the input value. Only 44 records will be returned to the caller. e.q: If Patient File contains patient names 'AA', 'AB', 'BB', 'BC, 'CC', 'CD'in this order and caller passes in 'A', all of those patients will beincluded in the list.If 'GG', 'KK', 'LL' are the 44th, 45th, and 46th patients in the patient name order, 'KK' and 'LL' will not be included. To get the next patients, caller must request the next batch of 44 records. For this reason, this RPC accepts two different format of'LIST FROM' text: 1. FROM = PATIENT NAME. This format will return records start with (** NOT PREFIXED BY **) FROM (PATIENT NAME) 2. FROM = LAST IEN^LAST PATIENT NAME. This format with return the next batch of 44 records after the LAST PATIENT NAME.

Property | Value
--- | ---
Label | LISTALL
Routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL | 30 | true | Contains the patient&#x27;s name or contains the patient&#x27;s file #2 IEN andname. Name part of the input may be a partial or full name.  Examples:  &quot;DOE,J&quot;  OR &quot;99999^DOE,J&quot;.
DIR | LITERAL | 2 | true | The value of DIR can be 1 or -1.  This parameter determines the $ORDER search direction, 1 is ascending and -1 is descending.
FROM | LITERAL | 30 | true | FORM is the &#x27;Start With&#x27; or &#x27;List From&#x27; input parametr. This is **NOT** a &#x27;Prefixed by&#x27; input parameter.This is a required field and can have two different formats. 1. FORM  &#x3D; PATIENT NAME. This format will return a batch of 44 patient records in patient name order start with PATIENT NAME. This is *NOT* a &#x27;Prefixed by&#x27; input parameter. Any records in that batch including patient names *not* prefixed by the FORM will be included. 2. FORM &#x3D; LAST IEN^LAST PATIENT NAME. This format is to provide a caller to get the next batch of 44 records. The list returned will NOT include the LAST PATIENT NAME. Commonly, RPC caller will set LAST IEN^LAST PATIENT NAME with the last record returned in the previous RPC call.
DIR | LITERAL | 2 | true | Input parameter DIR determines the order of the output array returned. Thevalue is either 1 (ascending order &#x3D; default value) or -1 (descending order).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}