---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP FILE HNC<br/>
# DENTV TP FILE HNC

This RPC adds, updates or marks as deleted, records to the Treatment Plan Transaction/Exam file (#228.2).  The only record type supported by this RPC is the Head and Neck type, where the TYPE field (.29)=4.

## Properties

Property | Value
--- | ---
Label | HNC
Routine | [DENTVTP4](http://code.osehra.org/dox/Routine_DENTVTP4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 30 | true | This is the input array for adding, updating or deleting multiple Head&amp;Neck transaction types to the Treatment Plan Transaction/Exam file(#228.2).  The input array will contain the following data:  data(&quot;ENC&quot;)&#x3D;pointer to the DENTAL HISTORY file (#228.1)              required for Adding new records, optional for update records  data(n)    &#x3D;p1^p2^p3^p4^p5^p6^p7^p8^p9^p10^p11^p12^p13^p14^p15              &#x3D;WP^word processing text             &#x3D;WP^word processing text, etc  where n&#x3D;number   and  p1&#x3D;txn id (-1 for add, valid txn id for update/delete)         p2&#x3D;prov id, p3&#x3D;X coord (number), p4&#x3D;Y coord (number)       p5&#x3D;lesion dt in external fmt (MM/DD/YY@HH:MM)       p6&#x3D;color (number),  p7&#x3D;shape (number),       p8&#x3D;size (0,1,2 from 228.3)       p9&#x3D;description,  p10&#x3D;deleted flag,  p11&#x3D;master flag       p12&#x3D;link to master (pointer to 228.2),  p13&#x3D;result flag       p14&#x3D;read only flag,  p15&#x3D;status (A&#x3D;add,U&#x3D;update,D&#x3D;mark as deleted)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}