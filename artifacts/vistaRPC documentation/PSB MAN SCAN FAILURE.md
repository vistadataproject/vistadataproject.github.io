---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB MAN SCAN FAILURE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB MAN SCAN FAILURE{:/}
 tag | {::nomarkdown}SCANFAIL{:/}
 routine | [PSBVDLU3](http://code.osehra.org/dox/Routine_PSBVDLU3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}SCANFAIL(RESULTS,PSBPARAM)      ;  TEJ 05/12/2006  BCMA-Managing Scanning Failures (MSF)        ;       Process Scanning Failures        ;               Parameters:        ;               Input (via GUI):        ;        Per Wristband  (0)      -       Pat IEN ^ ^ Failure Reason ^ User's Comment ^ \W\ ^-1 (keyed)        ;                                               ;        Per Medication        ;                       (0)      -       Pat IEN ^ Order Number ^ Failure Reason ^ User's Comment ^ \M\ ^-1 (keyed)        ;                       (1)      -       tag^ unique identifier        ;        ;          (example)    (1)      -       ADD^IEN of FAILED item        ;                               ;               Output:        ;                 Entry into database ^PSB(53.89)        ;                 Electronic Mail - Message Data per Scan Failure        ;                         ;                 RESULTS(0)=1        ;                 RESULTS(1)= 1 (Success) or -1 (Nonsuccess)        ;{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Data to initiate scanning failure process.  Input: Only\^\piece that must be populated is #5 - scan type (\Wristband\/\Medication\)   i.e. - MUAS WUAS MKEY WKEY MSCN WSCN MMME Node (1) is to present \ tag ^ unique id \ if available for a medication \unable to scan\. Procedure will populate BCMA Unable To Scan Log (file#53.77) appropriately, and send off MailMan message if necessary.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}