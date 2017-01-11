---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN MEDS 1ST 2-CHARS VA CLASS 

 property | value 
--- | --- 
 label | SPN MEDS 1ST 2-CHARS VA CLASS
 tag | COL
 routine | [SPNRPCH](http://code.osehra.org/dox/Routine_SPNRPCH_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns Pharmacy data in support of the Pharmacy Supplies subscreen of the Pressure Ulcer Treatment report. The results are first placed into ^UTILITY($J), and then sorted into reverse date order and placed into ^TMP($J) NOTE: NATIONAL DRUG CLASS (NDC) is also called VA CLASSIFICATION. NOTE: This RPC will find prescriptions based on thefirst two characters of the NATIONAL DRUG CLASSbeing XX OR XA (these represent PHARMACY SUPPLIES). NOTE: To find prescriptions based on the entire 5-characterNATIONAL DRUG CLASS name, use SPN MEDS BY FULL VA CLASS    Parameter values:   DFN is ien of the pt.   CUTDATE is the date to start collection data from.   TYPE will be for the drug class.      1 is for rx's when the first two characters of the NDC       are XA or XX.      2 is for rx's when the first two characters of the NDC      are IM and the drug name contains INFLUENZA.         Returns:                TMP($J,X) sorted by most recent Rx                VA CLASS ^ ITEM DESCRIPTION ^ DATE DISPENSED ^ PSRX(IEN  SPN MEDS 1ST 2-CHARS VA CLASS Results:  IP 127.0.0.12Account dayt42 NOTE  this routine will find prescriptions based on theTHE FIRST TWO CHARACTERS IN THE NATIONAL DRUG CLASS IN, AM .TYPE will be for the drug class1 is rx's that have a drug class that begin with either a XA OR XX..2 Locates RX's the have a drug NDC that begins with 'IM' and the drug name has INFLUENZA in the text Returns:TMP($J,x) sorted by most recent rxVA CLASS ^ ITEM DESCRIPTION ^ DATE DISPENSED ^ PSRX(IEN Three parameters 1 1002624015  / ICN    (Patients dfn is 4570)2 Jan 01 2004  / cut date3 1 Report Generated at Fri Jan 19 17:51:17 CST 2007. parameter size: 3 Division : 552 Is connected true   SPN MEDS 1ST 2-CHARS VA CLASS Results:  XA402^POUCH,DRAINABLE,SUR-FIT NATURA 401513^MAR 31, 2005^PSRX(4302643^EOL999XA402^POUCH,DRAINABLE,SUR-FIT NATURA 401513^FEB 03, 2005^PSRX(4237949^EOL999XA604^SKIN PREP WIPE^JAN 21, 2005^PSRX(4221489^EOL999XA604^WAFER,SURFIT-NAT FLEXIBLE C#4131-67^JAN 21, 2005^PSRX(4221493^EOL999XA511^CATHETER 26FR 5CC BALLOON (EA)^NOV 18, 2004^PSRX(4160679^EOL999XA900^ADHESIVE REMOVER PAD^NOV 17, 2004^PSRX(4160676^EOL999XA400^TRAY, CATHETERIZATION W/O CATHETER^NOV 17, 2004^PSRX(4160687^EOL999XA500^URINE DRAINAGE BAG (CYSTOFLO) (ea) ^AUG 13, 2004^PSRX(4062088^EOL999XA604^WAFER,SURFIT-NAT FLEXIBLE C#4131-67^AUG 13, 2004^PSRX(4062089^EOL999XA604^WAFER,DURAHESIVE FLEXABLE #413165^JUN 28, 2004^PSRX(4007001^EOL999XA400^TRAY, CATHETERIZATION W/O CATHETER^JUN 11, 2004^PSRX(3992102^EOL999XA400^TRAY, CATHETERIZATION W/O CATHETER^MAY 14, 2004^PSRX(3962960^EOL999XA400^TRAY, CATHETERIZATION W/O CATHETER^MAY 14, 2004^PSRX(3962961^EOL999XA700^OSTO-ZYME 8 OZ^MAY 14, 2004^PSRX(3963501^EOL999XA402^POUCH,DRAINABLE,SUR-FIT NATURA 401513^APR 07, 2004^PSRX(3923827^EOL999XA604^SKIN PREP WIPE^FEB 02, 2004^PSRX(3850184^EOL999XA604^SKIN PREP WIPE^FEB 02, 2004^PSRX(3850185^EOL999XA604^WAFER,DURAHESIVE FLEXABLE #413165^JAN 30, 2004^PSRX(3850186^EOL999   SPN MEDS 1ST 2-CHARS VA CLASS Results length: 1227 Is connected true  Ran to find no data results:SPN MEDS 1ST 2-CHARS VA CLASS Results: SPN MEDS 1ST 2-CHARS VA CLASS Results length: 0 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL |  |  |  | 
| CUTDATE | LITERAL |  |  |  | 
| TYPE | LITERAL |  |  |  | 




 Generated on January 11th 2017, 7:15:04 am