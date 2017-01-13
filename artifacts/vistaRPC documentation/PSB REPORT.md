---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}PSB REPORT{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBO](http://code.osehra.org/dox/Routine_PSBO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return the text for the specified report and the user has the option to print the reports.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the character designation for the needed report:AL: Allergy RequestBL: Bar Code LabelBZ: Bar Code LabelCE: Coversheet - Expired/DC'd/Expiring OrdersCI: Coversheet - IV OverviewCM: Coversheet - Medication OverviewCP: Coversheet - PRN OverviewDL: Due ListDO: Display OrderIV: IV Bag StatusMD: Missing Dose by WardMH: Medication Administration HistoryML: Medication LogMM: Missed MedicationMT: Medication Therapy ReportMV: Medication Variance LogPE: PRN EffectivenessPF: Patient Record FlagPI: Patient InquiryPM: Patient Medication HistorySF: Unable To Scan DetailST: Unable To Scan SummaryVT: Cumulative VitalsWA: Ward Administration TimesXA: Unknown Action Status{:/} | 
| {::nomarkdown}PSBDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN{:/} | 
| {::nomarkdown}PSBSTRT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Fileman Start Date/Time{:/} | 
| {::nomarkdown}PSBSTOP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Fileman Stop Date/Time{:/} | 
| {::nomarkdown}PSBINCL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the parameters for a Due List in up-arrow pieces. Piece   1: 1/0 Include Continuous Meds        2: 1/0 Include PRN Meds        3: 1/0 Include OnCall Meds        4: 1/0 Include OneTime Meds        5: 1/0 Include Comments        6: 1/0 Include Auditsblanks at the end of the report.{:/} | 
| {::nomarkdown}PSBDEV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the name of the device that the report prints to.{:/} | 
| {::nomarkdown}PSBSORT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Sorts the report by patient or by ward{:/} | 
| {::nomarkdown}PSBOI{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Order/Orderable Item number. {:/} | 
| {::nomarkdown}PSBWLOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Ward Location {:/} | 
| {::nomarkdown}PSBWSORT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Sort By Patient - \P\  or By Bed     - \B\{:/} | 
| {::nomarkdown}PSBFUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the parameters for Due list in up-arrow pieces Piece   1: 1/0 Include Blanks (Changes/Addendums)        2: 1/0 Include IV Meds        3: 1/0 Include Unit Dose Meds        4: 1/0 Include Future Orders{:/} | 
| {::nomarkdown}PSBORDNUM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The PSBORDNUM is the pharmacy order number from the Inpatient Medicationspackage. Example: 10U or 10V This order number is used to do a lookup of medications by orderable item for the medication history report.{:/} | 
| {::nomarkdown}PSBLIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This  OPTIONAL  parameter contains list of data to input for the creating of a report.  The report's developer/designer should be aware ofthe type of information to be input via this parameter.  For example per the BCMA Medication Therapy Report , this parameter will contain a list ofDispensed Drug(s)/VA Drug Classification(s)/Orderable Items to be used per a \Medical Therapy Report\. Each item in the list will be tagged respectively: \DD\/\VAC\/\OIT\  Eachitem will have the appropriate file pointer data as \^\piece #3. example: List[0]=        \MT^OIT^1043\List[1]=        \MT^OIT^475\List[2]=        \MT^OIT^464\List[3]=        \MT^OIT^88\   The data in the list will be filed into SUBFILE #53.692  (MULTIPLE).{:/} | 
| {::nomarkdown}PSBRCRI{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional parameter contains \additional\ report criteria.  The Idea is to make the first part of the data to designate the purpose of the databeing input.  An example is to send an addition \Query Date\ the literal \QD^3070419.1200\  could be the input data.    Current list of tags:  \QD\ - query date{:/} | 
| {::nomarkdown}PSBORDNM{:/} |  |  |  |  | 
| {::nomarkdown}PSBPST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IDENTIFIES THE PRIMARY, SECONDARY AND TERTIARY SORT ORDERS FOR THE REPORT SEPARATED BY \^\.{:/} | 
| {::nomarkdown}PSBTR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field defines what sub-headers will be printed on the report.{:/} | 
| {::nomarkdown}PSBSIFIL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Include Special Instructions/Other Print Info on report Yes/No.0 = No1 = Yes{:/} | 
| {::nomarkdown}PSBCLINORD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field is an indicator as to what mode the report will be run in.  Clinic order mode or Inpatient mode.  This is an exclusive mode for certain reports to run in.C = Clinic Orders onlyI = Inpatient Orders only{:/} | 
| {::nomarkdown}PSB20{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reserved parameter 20 for future use.{:/} | 
| {::nomarkdown}PSB21{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reserved parameter 21 for future use.{:/} | 
| {::nomarkdown}PSB22{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reserved parameter 22 for future use.{:/} | 
| {::nomarkdown}PSB23{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reserved parameter 23 for future use.{:/} | 
| {::nomarkdown}PSB24{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reserved parameter 24 for future use.{:/} | 
| {::nomarkdown}PSBCLLIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown}LIST ARRAY FOR CLINICS{:/} | 
| {::nomarkdown}PSBDIV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Division{:/} | 




 Generated on January 13th 2017, 7:11:26 am