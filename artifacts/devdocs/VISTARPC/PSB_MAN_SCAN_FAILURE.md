---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PSB MAN SCAN FAILURE
# PSB MAN SCAN FAILURE

SCANFAIL(RESULTS,PSBPARAM)      ;  TEJ 05/12/2006  BCMA-Managing Scanning Failures (MSF)        ;       Process Scanning Failures        ;               Parameters:        ;               Input (via GUI):        ;        Per Wristband  (0)      -       Pat IEN ^ ^ Failure Reason ^ User's Comment ^ "W" ^-1 (keyed)        ;                                               ;        Per Medication        ;                       (0)      -       Pat IEN ^ Order Number ^ Failure Reason ^ User's Comment ^ "M" ^-1 (keyed)        ;                       (1)      -       tag^ unique identifier        ;        ;          (example)    (1)      -       ADD^IEN of FAILED item        ;                               ;               Output:        ;                 Entry into database ^PSB(53.89)        ;                 Electronic Mail - Message Data per Scan Failure        ;                         ;                 RESULTS(0)=1        ;                 RESULTS(1)= 1 (Success) or -1 (Nonsuccess)        ;

Property | Value
--- | ---
Label | SCANFAIL
Routine | [PSBVDLU3](http://code.osehra.org/dox/Routine_PSBVDLU3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBPARAM | LIST |  | true | Data to initiate scanning failure process.  Input: Only&quot;^&quot;piece that must be populated is #5 - scan type (&quot;Wristband&quot;/&quot;Medication&quot;)   i.e. - MUAS WUAS MKEY WKEY MSCN WSCN MMME Node (1) is to present &quot; tag ^ unique id &quot; if available for a medication &quot;unable to scan&quot;. Procedure will populate BCMA Unable To Scan Log (file#53.77) appropriately, and send off MailMan message if necessary.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}