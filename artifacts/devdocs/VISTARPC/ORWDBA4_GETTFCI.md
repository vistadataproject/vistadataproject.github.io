---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDBA4 GETTFCI<br/>
# ORWDBA4 GETTFCI



## Properties

Property | Value
--- | ---
Label | GETTFCI
MUMPS Implementation | [ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORIEN | LIST |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETTFCI^ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
Method Comment | Get Treatment Factors Clinical Indicators
Input Parameters | ORIEN
First Comment | {::nomarkdown}<pre><code>Input Variable:<br/>  ORIEN    Order Internal Entry Number (array variable)<br/>Ouput Variable:<br/>  Y        Y(AI)=Order_IEN^Treatment_Factors^ICD9^ICD9_Description<br/>           There can be up to 4 ICD9 codes and thier descriptions<br/>           ICD901^DESC01^ICD902^DESC02^ICD903^DESC03^ICD904^DESC04<br/>Local Variables:<br/>  AI       Array Index<br/>  CI       Clinical Index<br/>  TF       Treatment Factors<br/>  TFCI     Treatment Factors Clinical Indicators</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N AI,CI,CNT,DXS,TF,TFCI<br/> S U="^",(CNT,TF)=""<br/> F  S CNT=$O(ORIEN(CNT)) Q:CNT=""  D<br/> . S TF=$$GTF(ORIEN(CNT))<br/> . S DXS=$$GDCD(ORIEN(CNT))<br/> . I TF="NNNNNNNN"&(DXS="") Q<br/> . S TFCI(CNT)=ORIEN(CNT)_U_TF_$S(DXS="":"",1:U_DXS)<br/> M Y=TFCI</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBAGlobals.pas">BA/UBAGlobals.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}