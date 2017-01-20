---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB MED LOG LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB MED LOG LOOKUP{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBMLLKU](http://code.osehra.org/dox/Routine_PSBMLLKU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}BCMA Medication Log Look Up Remote Procedures. This routine is a conglomerate of  Medication Log lookup functionalityper the BCMA Graphical User Interface software. Input:  PSBREC (array)        PSBREC (0)     determine  \lookup\ function                       \PTLKUP\ (patient file (#2) lookup)                      \ADMLKUP\ (MedLog administration lookup)                      \SELECTAD\ (selected admin.)               (1)     values to use per lookup. (DFN per ADMLKUP)                       value of selected item. (PSB IEN per SELECTAD)               (2)     search date per ADMLKUP    Output: RESULTS (array)        RESULTS(0)    number of lookup matches               (1)    error message or data per match/selection               (n)    data per subsequent match/selection. \PTLKUP\ results data format:RPC Call: PSB MED LOG LOOKUPRESULTS(0) = 1RESULTS(1) = piece 1         Patient's DFN               (\-1\ if error/message)piece 2         Patient's Namepiece 3         Sexpiece 4         Date of Birth (FM format)piece 5         Social Security Numberpiece 6         \\piece 7         \\piece 8         \\piece 9         \\piece 10        Date Of Birth (displayable format)piece 11        Social Security Number (displayable format)   \ADMLKUP\ results data format:RESULTS(0)=Number of lines returned. RESULTS(1)=piece 1         DFN of Patientpiece 2         DATE of Activitypiece 3         Orderable Item_\ \_Dosage Formpiece 4         IV Unique IDpiece 5         Action Statuspiece 6         Schedule Typepiece 7         Action Date/Time (FileMan)piece 8         Action By Initialspiece 9         PRN Reasonpiece 10        PRN Effectiveness   \SELECTAD\ results data format: RESULTS(0)=Number of lines returned. RESULTS(1)=piece 1         PSBIEN of the administration selected for edit. (\-1\ if error/message)piece 2         DFN of Patient                                piece 3         Patient Namepiece 4         SSNpiece 5         Medicationpiece 6         BagIDpiece 7         AdminStatpiece 8         \for possible later use\piece 9         AdminD/Tpiece 10        InjctStpiece 11        \IV\/\PB\/\UD\piece 12        \for possible later use\piece 13        Order Statuspiece 14        Schedul. Typepiece 15        Order Number_U/Vpiece 16        Order has given patch or infusing IVbag - Flag RESULTS(2)=piece 1         PRN Reasonpiece 2         PRN Effectiveness RESULTS(3..n) [for each dd/add/sol] =piece 1         \DD\/\ADD\/\SOL\piece 2         drug IENpiece 3         drug Namepiece 4         Units Orderedpiece 5         Units Givenpiece 6         Units of Administration{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBREC{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PSBREC  (array)(0)     determines  \lookup\ function         \PTLKUP\  (patient file (#2) lookup)        \ADMLKUP\  (administration lookup)        \SELECTAD\ (process selected administration. (1)     values to use for the lookup.  (DFN for the ADMLKUP)        \SELECTAD\ must present the PSBIEN value        of the user-chosen administration.(2)     search date for ADMLKUP{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}