---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV FILE DATA<br/>
# DENTV FILE DATA

The will process the data from the DRM GUI and file it to the corresponding files.  It will create a record in file 221, 228.1, one or more files in 228.2, and will file data to PCE.

## Properties

Property | Value
--- | ---
Label | UPD
Routine | [DENTVRF](http://code.osehra.org/dox/Routine_DENTVRF_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 250 | true | This array will contain all the data needed. data(1) &#x3D; p1^p2^p3^p4^p5^p6^p7  where       p1&#x3D;dfn   p2&#x3D;visit file ien   p3&#x3D;appt date.time       p4&#x3D;new appt date.time   p5&#x3D;location (file 44 ien)       p6&#x3D;primary provider     p7&#x3D;primary icd9 for pce  data(2) &#x3D; secondary provider^sec prov^sec prov^ .... data(3) &#x3D; p1^p2^p3^p4^p5^p6  [ SC^AO^IR^EC^MST^HNC ] data(4)&#x3D; DAS category ^ bedsection ^ disposition ^ station.division    NOTES: Must have a location in order to create a new visit by passing anew appointment date.time   If filing data to PCE, then location andprimary ICD9 are mandatory    data(n) &#x3D; p1^p2^p3^p4^...^p12  where n&#x3D;5,6,7,8,9....  and where      p1 &#x3D; optional - flag for filing data      p2 &#x3D; cptcode (.01 field value from file 81)      p3 &#x3D; tooth# (0-32)      p4 &#x3D; surfaces      p5 &#x3D; canals      p6 &#x3D; quadrants      p7 &#x3D; primary (Y)      p8 &#x3D; icd9 code (primary diag code for this procedure and tooth)      p9,p10,p11,p12 - optional secondary icd9 codes    NOTES: p1 is optional - format mmm where m is either 0 or 1    null or 111 - file data to old DAS, new dental history, and to PCE            000 - don&#x27;t file data - should never be            100 - file to old DAS only            010 - file to new dental history only            001 - file to PCE only            110 - file to old DAS and new dental history            101 - file to old DAS and PCE            011 - file to new dental history and PCE                  p4,p5,p6,p8-p11 - all optional - send data only if relevant       p5 - qty may be eliminated pending outcome of current messages



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}