//
//  ViewController.swift
//  MapX3000
//
//  Created by Jaulie Goe on 2/18/17.
//  Copyright © 2017 Jaulie Goe. All rights reserved.
//

import UIKit
import MapKit
import CoreLocation

class ViewController: UIViewController {

    @IBOutlet weak var Map: MKMapView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        let parkAvePent = CLLocationCoordinate2DMake(40.7713024, -73.9632393)
        let annotation = MKPointAnnotation()
        annotation.coordinate = parkAvePent
        annotation.title = "Park Ave Penthouse"
        
        Map.addAnnotation(annotation)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

