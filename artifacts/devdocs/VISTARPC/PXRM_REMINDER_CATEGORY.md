---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PXRM REMINDER CATEGORY<br/>
# PXRM REMINDER CATEGORY

List reminders and categories in display order for a reminder category.

## Properties

Property | Value
--- | ---
Label | CATEGORY
Routine | [PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CATEGORY | LITERAL | 16 | true | Category ien [#811.7]



## MUMPS Method Description

Property | Value
--- | ---
Method | [CATEGORY^PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
Method Comment | Get category information
Input Parameters | CIEN
First Comment | {::nomarkdown}<pre><code><br/> Input parameter Category ien [#811.7]<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DATA,IC,IEN,NAME,PNAME,RIEN,SEQ,SUB,TEMP,USAGE<br/> S IC=0<br/> S NAME=$G(^PXRMD(811.7,CIEN,0)) I NAME="" Q<br/> S SUB=0 K TEMP<br/> F  S SUB=$O(^PXRMD(811.7,CIEN,2,SUB)) Q:SUB=""  D<br/> .S DATA=$G(^PXRMD(811.7,CIEN,2,SUB,0)) Q:DATA=""<br/> .S RIEN=$P(DATA,U) Q:'RIEN<br/> .S SEQ=$P(DATA,U,2)_0<br/> .;Include only CPRS reminders<br/> .S USAGE=$P($G(^PXD(811.9,RIEN,100)),U,4) I USAGE'["C",USAGE'["*" Q<br/> .I USAGE["L"!(USAGE["O") Q<br/> .;Skip inactive reminders<br/> .S DATA=$G(^PXD(811.9,RIEN,0)) Q:DATA=""  Q:$P(DATA,U,6)<br/> .S NAME=$P(DATA,U) I NAME="" S NAME="Unknown"<br/> .;or printname<br/> .S PNAME=$P(DATA,U,3)<br/> .S TEMP(SEQ)=RIEN_U_NAME_U_PNAME<br/> S SEQ=""<br/> F  S SEQ=$O(TEMP(SEQ)) Q:SEQ=""  D<br/> .S IC=IC+1,ORY(IC)="R"_U_TEMP(SEQ)<br/> S SUB=0 K TEMP<br/> F  S SUB=$O(^PXRMD(811.7,CIEN,10,SUB)) Q:SUB=""  D<br/> .S DATA=$G(^PXRMD(811.7,CIEN,10,SUB,0)) Q:DATA=""<br/> .S IEN=$P(DATA,U) Q:'IEN<br/> .S SEQ=$P(DATA,U,2),TEMP(SEQ)=IEN<br/> S SEQ=""<br/> F  S SEQ=$O(TEMP(SEQ)) Q:SEQ=""  D<br/> .S SUB=TEMP(SEQ) Q:'SUB<br/> .S NAME=$P($G(^PXRMD(811.7,SUB,0)),U) Q:NAME=""<br/> .S IC=IC+1,ORY(IC)="C"_U_SUB_U_NAME</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}