---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN RESUBMIT
# ORQQCN RESUBMIT

Allows resubmission of a cancelled consult or procedure request afterediting.  This is a backdoor resubmission, and CPRS will be notified viathe HL7 proocess.

Property | Value
--- | ---
Label | RESUBMIT
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ConsultID | LITERAL | 16 | true | 
ChangeArray | LIST |  | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [RESUBMIT^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Edit/Resubmit a cancelled consult/procedure request
Input Parameters | GMRCO, OREDITED
Code | {::nomarkdown}<pre><code> N ORNODE<br/> S ORNODE=$NAME(^TMP("GMRCR",$J))<br/> M @ORNODE=OREDITED<br/> D FILE^GMRCGUIC(GMRCO,ORNODE)<br/> S Y=0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}