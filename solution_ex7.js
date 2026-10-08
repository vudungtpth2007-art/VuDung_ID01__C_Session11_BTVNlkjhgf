
// Danh sách thiết bị
const devices = [];

// Tự sinh mã DEV_xxx
const generateId = (list) => {
  return `DEV_${String(list.length + 1).padStart(3, "0")}`;
};

// 1. CREATE - Thêm thiết bị
const createDevice = (list, newDev) => {
  if (
    !newDev.name ||
    !newDev.room ||
    newDev.powerWatts === undefined ||
    newDev.powerWatts <= 0
  ) {
    return false;
  }

  const device = {
    id: generateId(list),
    name: newDev.name,
    room: newDev.room,
    powerWatts: newDev.powerWatts,
    isActive: newDev.isActive !== undefined ? newDev.isActive : true
  };

  list.push(device);

  return true;
};

// 2. READ - Xem thiết bị theo phòng
const readDevicesByRoom = (list, roomName) => {
  return list.filter((device) => device.room === roomName);
};

// 3. UPDATE - Cập nhật thiết bị
const updateDevice = (list, id, updateData) => {
  const device = list.find((item) => item.id === id);

  if (!device) {
    return false;
  }

  if (updateData.name !== undefined) {
    device.name = updateData.name;
  }

  if (updateData.room !== undefined) {
    device.room = updateData.room;
  }

  if (updateData.powerWatts !== undefined) {
    device.powerWatts = updateData.powerWatts;
  }

  if (updateData.isActive !== undefined) {
    device.isActive = updateData.isActive;
  }

  return true;
};

// 4. DELETE - Xóa thiết bị
const deleteDevice = (list, id) => {
  const index = list.findIndex((device) => device.id === id);

  if (index === -1) {
    return false;
  }

  list.splice(index, 1);

  return true;
};


// ===============================
// KIỂM THỬ
// ===============================

console.log("=== CREATE ===");

console.log(
  createDevice(devices, {
    name: "Điều hòa phòng khách",
    room: "Phòng khách",
    powerWatts: 1200,
    isActive: true
  })
);

console.log(
  createDevice(devices, {
    name: "Đèn ngủ",
    room: "Phòng ngủ",
    powerWatts: 10,
    isActive: true
  })
);

console.log(
  createDevice(devices, {
    name: "Tivi",
    room: "Phòng khách",
    powerWatts: 150
  })
);

console.log(devices);


console.log("=== READ ===");

console.log(
  readDevicesByRoom(devices, "Phòng khách")
);


console.log("=== UPDATE ===");

// Kiểm tra cập nhật false
console.log(
  updateDevice(devices, "DEV_001", {
    isActive: false
  })
);

// Kiểm tra cập nhật 0
console.log(
  updateDevice(devices, "DEV_002", {
    powerWatts: 0
  })
);

console.log(devices);


console.log("=== DELETE ===");

console.log(
  deleteDevice(devices, "DEV_003")
);

console.log(devices);

// ID không tồn tại
console.log(
  deleteDevice(devices, "DEV_999")
);