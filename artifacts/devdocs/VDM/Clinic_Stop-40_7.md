---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Clinic_Stop-40_7
# Clinic Stop (40.7)
The Clinic Stop file (#40.7) contains all AMIS Stop Codes and their  associated Name, Restriction Type (E-Either, P-Primary Only, or  S-Secondary Only), and if applicable, Restriction Date (for P or S  Restriction Types).  If a clinic stop entry is inactive, there is an Inactive Date.   This file has been "Locked Down" so that Fileman and other user updates  are not allowed.  Changes may be made only through VistA Maintenance (VM)  patches coordinated with the Managerial Cost Accounting Office (MCAO) and Enterprise Product Services (EPS). The file definition (data dictionary) shall not be modified.  All additions, changes, inactivations, and reactivations to entries in the file shall be accomplished only by VM patches.  Creating new Stop Codes or local Stop Codes, and/or editing fields in the file, is not permitted.

<dl>
<dt>Global</dt><dd>^DIC(40.7,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This field contains the name of the clinic stop code. | STRING | INDEXED<br/>REQUIRED | 
**Amis Reporting Stop Code**{::nomarkdown}<pre><code>  amis_reporting_stop_code</code></pre>{:/} | 1 | This field contains the number related to the stop code that is used when<br/>generating the OPC file.  This number is what is transmitted. | NUMERIC | INDEXED<br/>REQUIRED | 
**Inactive Date**{::nomarkdown}<pre><code>  inactive_date</code></pre>{:/} | 2 | This field contains a date of when a Clinic Stop code has been inactivated. | DATE-TIME |  | 
**Convert To Stop Code**{::nomarkdown}<pre><code>  convert_to_stop_code</code></pre>{:/} | 3 | This field contains a pointer value to the new Clinic Stop code that<br/>has a three number AMIS REPORTING STOP CODE. | POINTER |  | [Clinic_Stop-40_7](Clinic_Stop-40_7)
**Cost Distribution Center**{::nomarkdown}<pre><code>  cost_distribution_center</code></pre>{:/} | 4 | This field contains a number related to a cost distribution center.  This<br/>is related to the RAM. | STRING |  | 
**Restriction Type**{::nomarkdown}<pre><code>  restriction_type</code></pre>{:/} | 5 | This field describes a Stop Code restriction type.  Valid entries are:-<br/>     P - Primary    S - Secondary    E - Either | ENUMERATION |  | {::nomarkdown}Either: <em><strong>E</strong></em><br/>Primary: <em><strong>P</strong></em><br/>Secondary: <em><strong>S</strong></em>{:/}
**Restriction Date**{::nomarkdown}<pre><code>  restriction_date</code></pre>{:/} | 6 | This field contains the date the Stop Code became restricted.  When the <br/>'Restriction Type' field has a value of 'P' or 'S' then a 'Restriction Date'<br/>should be associated with it. | DATE-TIME |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}