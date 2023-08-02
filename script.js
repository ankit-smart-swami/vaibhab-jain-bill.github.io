function printDiv() {
    var printContents = document.getElementById("invoiceholder").innerHTML;
    var originalContents = document.body.innerHTML;

    // Temporarily replace the entire body content with the div content to be printed
    document.body.innerHTML = printContents;

    // Print the div content
    window.print();

    // Restore the original content of the body
    document.body.innerHTML = originalContents;
}