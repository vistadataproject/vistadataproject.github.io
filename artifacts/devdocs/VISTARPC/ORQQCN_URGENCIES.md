---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN URGENCIES
# ORQQCN URGENCIES

Returns a list of applicable urgencies from PROTOCOL file 101,given a ConsultIEN and type.

Property | Value
--- | ---
Label | URG
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult ID | LITERAL | 16 | true | Internal file number of consult in file 123.
Request type | LITERAL | 30 | true | Consult or procedure.  Pointer to PROTOCOL file 101.  Value iseither &#x27;GMRCOR CONSULT&#x27; or &#x27;GMRCOR REQUEST&#x27;.



### MUMPS Method Description

Property | Value
--- | ---
Method | [URG^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | new urgency from 101.42
Input Parameters | GMRCO
Code | {::nomarkdown}<pre><code> Q:+$G(GMRCO)=0<br/> N GMRCURG,X,GMRCCSLT,GMRCPROC,GMRCTYPE,GMRCPROT<br/> S GMRCCSLT=$O(^ORD(101,"B","GMRCOR CONSULT",0))<br/> S GMRCPROC=$O(^ORD(101,"B","GMRCOR REQUEST",0))<br/> S GMRCTYPE=$P(^GMR(123,+GMRCO,0),"^",17)<br/> I $P(^GMR(123,+GMRCO,0),"^",18)["I" D<br/> . S X=$S(GMRCTYPE=GMRCCSLT:"S.GMRCT",1:"S.GMRCR")<br/> E  S X="S.GMRCO"<br/> S GMRCURG=""<br/> F I=1:1  S GMRCURG=$O(^ORD(101.42,X,GMRCURG)) Q:GMRCURG=""  D<br/> .S GMRCPROT=$O(^ORD(101,"B","GMRCURGENCY - "_GMRCURG,0))<br/> .S Y(I)=GMRCPROT_U_GMRCURG<br/> .;S Y(I)=$O(^ORD(101.42,X,GMRCURG,0))_U_GMRCURG</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}