---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP4 HDR MODIFY
# ORWRP4 HDR MODIFY

This RPC looks at data returned from the HDR and makes any modificationsnecessary to make the data compatible with CPRS Reports.

Property | Value
--- | ---
Label | HDR
Routine | [ORWRP4](http://code.osehra.org/dox/Routine_ORWRP4_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HANDLE | LITERAL | 30 | true | Remote Broker ID needed to find data in ^XTMP(HANDLE,&quot;D&quot;,
ID  | LITERAL | 30 | true | Report ID found in field .02 of file 101.24



### MUMPS Method Description

Property | Value
--- | ---
Method | [HDR^ORWRP4](http://code.osehra.org/dox/Routine_ORWRP4_source.html)
Method Comment | Extract/Modify data from the HDR
Input Parameters | HANDLE, ID
First Comment | {::nomarkdown}<pre><code>HANDLE=Remote Broker ID in ^XTMP(HANDLE,"D",<br/>ID=Report ID found in field .02 file 101.24</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X,ORIFN,ORID,ORCNT,ORTN,ORENT,ORRTN<br/> S ROOT=""<br/> I $G(HANDLE)="" S ROOT(0)="-1^Bad Handle" Q<br/> I '$D(^XTMP(HANDLE)) S ROOT(0)="-1^Bad Handle" Q<br/> S ORID=$O(^ORD(101.24,"AC",ID,0))<br/> I $G(ORID)="" S ROOT(0)="-1^No ID match" Q<br/> S ORCNT=$O(^ORD(101.24,ORID,3,"C",9999),-1)<br/> I $G(ORCNT)="" S ROOT(0)="-1^No Columns for Report" Q<br/> S ORTN=$P(^ORD(101.24,ORID,4),"^",6),ORENT=$P(^(4),"^",7)<br/> I '$L(ORTN) S ROOT(0)="-1^No HDR Routine exists" Q<br/> S ORRTN=ORENT_"^"_ORTN<br/> I '$L($T(@ORRTN)) S ROOT(0)="-1^HDR Routine non-existant" Q<br/> D @ORRTN</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}