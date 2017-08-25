---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB REPORT<br/>
# PSB REPORT

Return the text for the specified report and the user has the option to print the reports.

## Properties

Property | Value
--- | ---
Label | RPC
MUMPS Implementation | [PSBO](http://code.osehra.org/dox/Routine_PSBO_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBTYPE | LITERAL | 2 | true | Contains the character designation for the needed report:AL: Allergy RequestBL: Bar Code LabelBZ: Bar Code LabelCE: Coversheet - Expired/DC&#x27;d/Expiring OrdersCI: Coversheet - IV OverviewCM: Coversheet - Medication OverviewCP: Coversheet - PRN OverviewDL: Due ListDO: Display OrderIV: IV Bag StatusMD: Missing Dose by WardMH: Medication Administration HistoryML: Medication LogMM: Missed MedicationMT: Medication Therapy ReportMV: Medication Variance LogPE: PRN EffectivenessPF: Patient Record FlagPI: Patient InquiryPM: Patient Medication HistorySF: Unable To Scan DetailST: Unable To Scan SummaryVT: Cumulative VitalsWA: Ward Administration TimesXA: Unknown Action Status
PSBDFN | LITERAL | 10 | true | Patient IEN
PSBSTRT | LITERAL | 20 | true | Internal Fileman Start Date/Time
PSBSTOP | LITERAL | 20 | true | Fileman Stop Date/Time
PSBINCL | LITERAL | 15 | true | Contains the parameters for a Due List in up-arrow pieces. Piece   1: 1/0 Include Continuous Meds        2: 1/0 Include PRN Meds        3: 1/0 Include OnCall Meds        4: 1/0 Include OneTime Meds        5: 1/0 Include Comments        6: 1/0 Include Auditsblanks at the end of the report.
PSBDEV | LITERAL | 30 | true | Contains the name of the device that the report prints to.
PSBSORT | LITERAL | 1 | true | Sorts the report by patient or by ward
PSBOI | LITERAL | 7 | true | Order/Orderable Item number. 
PSBWLOC | LITERAL | 30 | true | Ward Location 
PSBWSORT | LITERAL | 1 | true | Sort By Patient - &quot;P&quot;  or By Bed     - &quot;B&quot;
PSBFUT | LITERAL | 1 | true | Contains the parameters for Due list in up-arrow pieces Piece   1: 1/0 Include Blanks (Changes/Addendums)        2: 1/0 Include IV Meds        3: 1/0 Include Unit Dose Meds        4: 1/0 Include Future Orders
PSBORDNUM | LITERAL |  |  | The PSBORDNUM is the pharmacy order number from the Inpatient Medicationspackage. Example: 10U or 10V This order number is used to do a lookup of medications by orderable item for the medication history report.
PSBLIST | LIST |  | true | This  OPTIONAL  parameter contains list of data to input for the creating of a report.  The report&#x27;s developer/designer should be aware ofthe type of information to be input via this parameter.  For example per the BCMA Medication Therapy Report , this parameter will contain a list ofDispensed Drug(s)/VA Drug Classification(s)/Orderable Items to be used per a &quot;Medical Therapy Report&quot;. Each item in the list will be tagged respectively: &quot;DD&quot;/&quot;VAC&quot;/&quot;OIT&quot;  Eachitem will have the appropriate file pointer data as &quot;^&quot;piece #3. example: List[0]&#x3D;        &quot;MT^OIT^1043&quot;List[1]&#x3D;        &quot;MT^OIT^475&quot;List[2]&#x3D;        &quot;MT^OIT^464&quot;List[3]&#x3D;        &quot;MT^OIT^88&quot;   The data in the list will be filed into SUBFILE #53.692  (MULTIPLE).
PSBRCRI | LITERAL |  | true | Optional parameter contains &quot;additional&quot; report criteria.  The Idea is to make the first part of the data to designate the purpose of the databeing input.  An example is to send an addition &quot;Query Date&quot; the literal &quot;QD^3070419.1200&quot;  could be the input data.    Current list of tags:  &quot;QD&quot; - query date
PSBORDNM |  |  |  | 
PSBPST | LITERAL | 5 | true | IDENTIFIES THE PRIMARY, SECONDARY AND TERTIARY SORT ORDERS FOR THE REPORT SEPARATED BY &quot;^&quot;.
PSBTR | LITERAL | 10 | true | This field defines what sub-headers will be printed on the report.
PSBSIFIL | LITERAL | 1 | true | Include Special Instructions/Other Print Info on report Yes/No.0 &#x3D; No1 &#x3D; Yes
PSBCLINORD | LITERAL | 1 | true | This field is an indicator as to what mode the report will be run in.  Clinic order mode or Inpatient mode.  This is an exclusive mode for certain reports to run in.C &#x3D; Clinic Orders onlyI &#x3D; Inpatient Orders only
PSB20 | LITERAL | 1 | true | Reserved parameter 20 for future use.
PSB21 | LITERAL | 1 | true | Reserved parameter 21 for future use.
PSB22 | LITERAL | 1 | true | Reserved parameter 22 for future use.
PSB23 | LITERAL | 1 | true | Reserved parameter 23 for future use.
PSB24 | LITERAL | 1 | true | Reserved parameter 24 for future use.
PSBCLLIST | LIST | 90 | true | LIST ARRAY FOR CLINICS
PSBDIV | LITERAL |  | true | Division



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}