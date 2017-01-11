---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB MAN SCAN FAILURE 

 property | value 
--- | --- 
 label | PSB MAN SCAN FAILURE
 tag | SCANFAIL
 routine | [PSBVDLU3](http://code.osehra.org/dox/Routine_PSBVDLU3_source.html)
 return value type | ARRAY
 description | SCANFAIL(RESULTS,PSBPARAM)      ;  TEJ 05/12/2006  BCMA-Managing Scanning Failures (MSF)        ;       Process Scanning Failures        ;               Parameters:        ;               Input (via GUI):        ;        Per Wristband  (0)      -       Pat IEN ^ ^ Failure Reason ^ User's Comment ^ \W\ ^-1 (keyed)        ;                                               ;        Per Medication        ;                       (0)      -       Pat IEN ^ Order Number ^ Failure Reason ^ User's Comment ^ \M\ ^-1 (keyed)        ;                       (1)      -       tag^ unique identifier        ;        ;          (example)    (1)      -       ADD^IEN of FAILED item        ;                               ;               Output:        ;                 Entry into database ^PSB(53.89)        ;                 Electronic Mail - Message Data per Scan Failure        ;                         ;                 RESULTS(0)=1        ;                 RESULTS(1)= 1 (Success) or -1 (Nonsuccess)        ;

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBPARAM | LIST |  | true | Data to initiate scanning failure process.  Input: Only\^\piece that must be populated is #5 - scan type (\Wristband\/\Medication\)   i.e. - MUAS WUAS MKEY WKEY MSCN WSCN MMME Node (1) is to present \ tag ^ unique id \ if available for a medication \unable to scan\. Procedure will populate BCMA Unable To Scan Log (file#53.77) appropriately, and send off MailMan message if necessary. | 




 ###### Generated on January 11th 2017, 6:39:43 am