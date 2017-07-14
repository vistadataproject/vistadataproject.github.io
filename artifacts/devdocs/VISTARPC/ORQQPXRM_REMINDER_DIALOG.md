---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM REMINDER DIALOG<br/>
# ORQQPXRM REMINDER DIALOG

Dialog for a given reminder

## Properties

Property | Value
--- | ---
Label | DIALOG
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLINICAL REMINDER ID | LITERAL | 16 | true | Clinical reminder (ien) from CLINICAL REMINDER DEFINITION file [#811.9]



## MUMPS Method Description

Property | Value
--- | ---
Method | [DIALOG^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | ORREM, DFN
First Comment | {::nomarkdown}<pre><code> DBIA 3080</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DIEN<br/> D DIALOG^PXRMRPCC(.ORY,ORREM,DFN)<br/> I $P($G(ORY(1)),U)=-1 Q<br/> S DIEN=$G(^PXD(811.9,ORREM,51))<br/> S ORY(0)=0_U_+$P($G(^PXRMD(801.41,DIEN,0)),U,17)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}