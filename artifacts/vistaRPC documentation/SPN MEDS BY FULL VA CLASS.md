---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN MEDS BY FULL VA CLASS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN MEDS BY FULL VA CLASS{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNRPCI](http://code.osehra.org/dox/Routine_SPNRPCI_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC supports the Antiviral Medications subscreen of the Influenza Diagnosis and Treatment Report.          NOTE this RPC will find antiviral medications based on the               WHOLE VALUE of the NATIONAL DRUG CLASS (NDC)               i.e., IN160, AM800.  Another name for NDC is VA CLASS.         NOTE  To find prescriptions based on the first two characters               of the NATIONAL DRUG CLASS, use SPN MEDS 1ST 2-CHARS VA CLASS         Parameter values:            DFN is ien of the pt           CUTDATE is the date to start collection data from           TYPE will be for the drug's VA class               1 is anti-viral medications               2 is NSAID analgesics               3 is pain medications               4 is anticonvulsants               5 is tricyclic antidepressants               6 is opioid analgesics               7 is local anesthetics               8 is other medications         Returns:               TMP($J,X) sorted by most recent rx               VA CLASS ^ ITEM DESCRIPTION ^ DATE DISPENSED ^ PSRX(IEN Piece 1 is VA CLASS (such as AM800)Piece 2 is ITEM DESCRIPTION (such as OSELTAMIVIR PO4 75MG CAP)Piece 3 is DATE DISPENSED (such as 10/01/2003){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}CUTDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}