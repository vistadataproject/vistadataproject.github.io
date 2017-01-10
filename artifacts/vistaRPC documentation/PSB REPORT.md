---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB REPORT 

 property | value 
--- | --- 
 label | PSB REPORT
 tag | RPC
 routine | [PSBO](http://code.osehra.org/dox/Routine_PSBO_source.html)
 return value type | GLOBAL ARRAY
 description | Return the text for the specified report and the user has the option to print the reports.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBTYPE | LITERAL | 2 | true | Contains the character designation for the needed report:AL: Allergy RequestBL: Bar Code LabelBZ: Bar Code LabelCE: Coversheet - Expired/DC'd/Expiring OrdersCI: Coversheet - IV OverviewCM: Coversheet - Medication OverviewCP: Coversheet - PRN OverviewDL: Due ListDO: Display OrderIV: IV Bag StatusMD: Missing Dose by WardMH: Medication Administration HistoryML: Medication LogMM: Missed MedicationMT: Medication Therapy ReportMV: Medication Variance LogPE: PRN EffectivenessPF: Patient Record FlagPI: Patient InquiryPM: Patient Medication HistorySF: Unable To Scan DetailST: Unable To Scan SummaryVT: Cumulative VitalsWA: Ward Administration TimesXA: Unknown Action Status | 
| vs:Input_Parameter-8994_02 | PSBDFN | LITERAL | 10 | true | Patient IEN | 
| vs:Input_Parameter-8994_02 | PSBSTRT | LITERAL | 20 | true | Internal Fileman Start Date/Time | 
| vs:Input_Parameter-8994_02 | PSBSTOP | LITERAL | 20 | true | Fileman Stop Date/Time | 
| vs:Input_Parameter-8994_02 | PSBINCL | LITERAL | 15 | true | Contains the parameters for a Due List in up-arrow pieces. Piece   1: 1/0 Include Continuous Meds        2: 1/0 Include PRN Meds        3: 1/0 Include OnCall Meds        4: 1/0 Include OneTime Meds        5: 1/0 Include Comments        6: 1/0 Include Auditsblanks at the end of the report. | 
| vs:Input_Parameter-8994_02 | PSBDEV | LITERAL | 30 | true | Contains the name of the device that the report prints to. | 
| vs:Input_Parameter-8994_02 | PSBSORT | LITERAL | 1 | true | Sorts the report by patient or by ward | 
| vs:Input_Parameter-8994_02 | PSBOI | LITERAL | 7 | true | Order/Orderable Item number.  | 
| vs:Input_Parameter-8994_02 | PSBWLOC | LITERAL | 30 | true | Ward Location  | 
| vs:Input_Parameter-8994_02 | PSBWSORT | LITERAL | 1 | true | Sort By Patient - \P\  or By Bed     - \B\ | 
| vs:Input_Parameter-8994_02 | PSBFUT | LITERAL | 1 | true | Contains the parameters for Due list in up-arrow pieces Piece   1: 1/0 Include Blanks (Changes/Addendums)        2: 1/0 Include IV Meds        3: 1/0 Include Unit Dose Meds        4: 1/0 Include Future Orders | 
| vs:Input_Parameter-8994_02 | PSBORDNUM | LITERAL |  |  | The PSBORDNUM is the pharmacy order number from the Inpatient Medicationspackage. Example: 10U or 10V This order number is used to do a lookup of medications by orderable item for the medication history report. | 
| vs:Input_Parameter-8994_02 | PSBLIST | LIST |  | true | This  OPTIONAL  parameter contains list of data to input for the creating of a report.  The report's developer/designer should be aware ofthe type of information to be input via this parameter.  For example per the BCMA Medication Therapy Report , this parameter will contain a list ofDispensed Drug(s)/VA Drug Classification(s)/Orderable Items to be used per a \Medical Therapy Report\. Each item in the list will be tagged respectively: \DD\/\VAC\/\OIT\  Eachitem will have the appropriate file pointer data as \^\piece #3. example: List[0]=        \MT^OIT^1043\List[1]=        \MT^OIT^475\List[2]=        \MT^OIT^464\List[3]=        \MT^OIT^88\   The data in the list will be filed into SUBFILE #53.692  (MULTIPLE). | 
| vs:Input_Parameter-8994_02 | PSBRCRI | LITERAL |  | true | Optional parameter contains \additional\ report criteria.  The Idea is to make the first part of the data to designate the purpose of the databeing input.  An example is to send an addition \Query Date\ the literal \QD^3070419.1200\  could be the input data.    Current list of tags:  \QD\ - query date | 
| vs:Input_Parameter-8994_02 | PSBORDNM |  |  |  |  | 
| vs:Input_Parameter-8994_02 | PSBPST | LITERAL | 5 | true | IDENTIFIES THE PRIMARY, SECONDARY AND TERTIARY SORT ORDERS FOR THE REPORT SEPARATED BY \^\. | 
| vs:Input_Parameter-8994_02 | PSBTR | LITERAL | 10 | true | This field defines what sub-headers will be printed on the report. | 
| vs:Input_Parameter-8994_02 | PSBSIFIL | LITERAL | 1 | true | Include Special Instructions/Other Print Info on report Yes/No.0 = No1 = Yes | 
| vs:Input_Parameter-8994_02 | PSBCLINORD | LITERAL | 1 | true | This field is an indicator as to what mode the report will be run in.  Clinic order mode or Inpatient mode.  This is an exclusive mode for certain reports to run in.C = Clinic Orders onlyI = Inpatient Orders only | 
| vs:Input_Parameter-8994_02 | PSB20 | LITERAL | 1 | true | Reserved parameter 20 for future use. | 
| vs:Input_Parameter-8994_02 | PSB21 | LITERAL | 1 | true | Reserved parameter 21 for future use. | 
| vs:Input_Parameter-8994_02 | PSB22 | LITERAL | 1 | true | Reserved parameter 22 for future use. | 
| vs:Input_Parameter-8994_02 | PSB23 | LITERAL | 1 | true | Reserved parameter 23 for future use. | 
| vs:Input_Parameter-8994_02 | PSB24 | LITERAL | 1 | true | Reserved parameter 24 for future use. | 
| vs:Input_Parameter-8994_02 | PSBCLLIST | LIST | 90 | true | LIST ARRAY FOR CLINICS | 
| vs:Input_Parameter-8994_02 | PSBDIV | LITERAL |  | true | Division | 