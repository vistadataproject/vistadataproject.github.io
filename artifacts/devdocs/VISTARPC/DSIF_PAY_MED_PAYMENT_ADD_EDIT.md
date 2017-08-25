---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF PAY MED PAYMENT ADD EDIT<br/>
# DSIF PAY MED PAYMENT ADD EDIT

Use to add/edit Medical Payment data

## Properties

Property | Value
--- | ---
Label | EDITPAY
MUMPS Implementation | [DSIFPAY3](http://code.osehra.org/dox/Routine_DSIFPAY3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IDENTIFIER | LITERAL | 255 | true | IDENTIFIER&#x3D;ID^Date of service^Fee program^Authorization pointer^C&amp;P FLAG^Test payment validity Flag (do not store data)^Fee Basis reimbursement flag ID&#x3D;[Pt IEN;Fee Basis Vendor IEN;Initial date of service IEN (or blank fornew)];Service Provided IEN (or blank for new)]
SERVICE | LITERAL | 255 | true | SERVICE&#x3D;[.01] Service provided:(1)^[1]Amt Claimed:(2)^[2]Amount Paid:(3)^[5]Date Finalized:(4)^[7]Batch IEN:(5)^[8]Obligation#:(6)^ [13]Datecorrect invoice received:(7)^[14]Invoice #:(8)^[15]Patienttype:(9)^[16]POV:(10)^[17]Treatment type:(11)^ [26]Primary Servicefacility:(12)^[27]Associated 7078/583:(13)^Anesthesia Time:(14)
DIAG | LITERAL | 255 | true | DIAG&#x3D;[28]Primary Diagnosis:(1)^[30]Place of service:(2)^[31]HCFA type ofservice:(3)^[32]Service connected y/n:(4)^ [33]Vendor invoicedate:(5)^[42]Site of service zip code:(6)^[47]Units paid:(7)^[48]Revenuecode:(8)^ [49]Patient account number:(9)^[50]FPPS claim ID:(10)^[51]FPPSline item:(11)^[34]Prompt payment:(12)^Fee schedule Amt:(13)^Fee Schedule:(14)
REMARKS | LITERAL | 255 | true | REMARKS&#x3D;IEN of remark:(1)^ [may repeat with however many remarks]
MODS | LITERAL | 200 | true | MODS&#x3D;external value of modifier:(1)^ [may repeat for any modifiers]*Must be sorted lowest to highest in value
ADJUSTMENTS | LITERAL | 255 | true | ADJUSTMENTS&#x3D;IEN of adjustment:(1)^IEN Adjustment Group:(2)^Adjustment amount:(3)^ [may repeat]
FBSUSC | LITERAL | 200 | true | Suspension comments
FBSUS | LITERAL | 100 | true | FBSUS&#x3D;Amount suspended:(1)^date suspended:(2)^Suspend code:(3)
DSIFDATA | LIST | 255 | true |  ; DSIFDATA array (New fields added DSIF*3.2*2) ;  54^CONTRACT IEN (#54), if allowed for deletion &quot;@&quot; can be passed ;  58^ATTENDING PROV NAME (#58) ;  59^ATTENDING PROV NPI (#59) ;  60^ATTENDING PROV TAXONOMY CODE (#60) ;  61^OPERATING PROV NAME (#61) ;  62^OPERATING PROV NPI (#62) ;  63^RENDERING PROV NAME (#63) ;  64^RENDERING PROV NPI (#64) ;  65^RENDERING PROV TAXONOMY CODE (#65) ;  66^SERVICING PROV NAME (#66) ;  67^SERVICING PROV NPI (#67) ;  68^REFERRING PROV NAME (#68) ;  69^REFERRING PROV NPI (#69) ;  73^LI RENDERING PROV NAME (#73)    (these are payment line specific) ;  74^LI RENDERING PROV NPI (#74) ;  75^LI RENDERING PROV TAXONOMY (#75)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}